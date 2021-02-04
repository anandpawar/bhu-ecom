import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import axios from 'axios';
import { Product } from '../../models';
import { successResponse, errorResponse, uniqueId } from '../../helpers';

export const allProducts = async(req, res) => {
    try {
        const page = req.params.page || 1;
        const limit = 2;
        const products = await Product.findAndCountAll({
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