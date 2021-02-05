import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import axios from 'axios';
import { Product } from '../../models';
import { User } from '../../models';

import { successResponse, errorResponse, uniqueId } from '../../helpers';

export const allProducts = async(req, res) => {
    try {
        const page = req.params.page || 1;
        const limit = 10;
        const products = await Product.findAndCountAll({
            include: [{
                model: User
            }],
            order: [
                ['createdAt', 'DESC']
            ],
            offset: (page - 1) * limit,
            limit,
        });
        return successResponse(req, res, { products });
    } catch (error) {
        return errorResponse(req, res, error.message);
    }
};

export const createProduct = async(req, res) => {
    try {
        const {
            name,
            quantity
        } = req.body;

        const payload = {
            name,
            quantity,
            createdBy: req.user.id
        };

        const newProduct = await Product.create(payload);
        return successResponse(req, res, {});
    } catch (error) {
        return errorResponse(req, res, error.message);
    }
};



export const updateProduct = async(req, res) => {
    try {
        const id = req.body.id;
        const product = await Product.findOne({
            where: { id: id },
        });

        await Product.update(req.body, { where: { id: product.id } });
        return successResponse(req, res, {});
    } catch (error) {
        return errorResponse(req, res, error.message);
    }
};


export const deleteProduct = async(req, res) => {
    try {
        const id = req.params.id;
        const user = await Product.destroy({
            where: { id: id },
        });

        return successResponse(req, res, {});
    } catch (error) {
        return errorResponse(req, res, error.message);
    }
};