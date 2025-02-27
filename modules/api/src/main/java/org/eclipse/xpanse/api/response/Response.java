/*
 * SPDX-License-Identifier: Apache-2.0
 * SPDX-FileCopyrightText: Huawei Inc.
 *
 */

package org.eclipse.xpanse.api.response;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * Response for the REST API.
 */
@Data
public class Response {

    @NotNull
    @Schema(description = "The result code of response.")
    private String code;
    @NotNull
    @Schema(description = "The result message of response.")
    private String message;
    @NotNull
    @Schema(description = "The success boolean of response.")
    private Boolean success;
    @Schema(description = "The result data of response.")
    private Object data;

    /**
     * Create error response with resultCode and errorMessage.
     *
     * @param resultCode error result code
     * @param errMsg     error message
     * @return errorResponse
     */
    public static Response errorResponse(ResultCode resultCode, String errMsg) {
        Response response = new Response();
        response.success = false;
        response.code = resultCode.getCode();
        response.message = resultCode.getMessage() + ". -- " + errMsg;
        return response;
    }

    /**
     * Create success response with success message.
     *
     * @param successMsg success message
     * @return successResponse
     */
    public static Response successResponse(String successMsg) {
        Response response = new Response();
        response.success = true;
        response.code = ResultCode.SUCCESS.getCode();
        response.message = ResultCode.SUCCESS.getMessage() + ". -- " + successMsg;
        return response;
    }

    /**
     * Create success response with result data.
     *
     * @param data result data
     * @return successResponse
     */
    public static Response successResponse(Object data) {
        Response response = new Response();
        response.success = true;
        response.code = ResultCode.SUCCESS.getCode();
        response.message = ResultCode.SUCCESS.getMessage();
        response.setData(data);
        return response;
    }

}