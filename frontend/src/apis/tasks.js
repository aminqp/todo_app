/* eslint-disable */

import { Http } from "#widgets"

/**
 * This is auto generated file from postman collection
 */






export const list = ( config = null) => {
    return Http.instance.get(`{{app_host}}/api/v1/tasks/`, config);
};

export const retrieve = ( taskId ,config = null) => {
    return Http.instance.get(`{{app_host}}/api/v1/tasks/${taskId}`, config);
};

export const create = ( data = null, config = null) => {
    return Http.instance.post(`{{app_host}}/api/v1/tasks/add`, data, config);
};

export const update = ( taskId ,data = null, config = null) => {
    return Http.instance.patch(`{{app_host}}/api/v1/tasks/${taskId}`, data, config);
};

export const remove = ( taskId ,data = null, config = null) => {
    return Http.instance.delete(`{{app_host}}/api/v1/tasks/${taskId}`, data, config);
};
