/*
 * SPDX-License-Identifier: Apache-2.0
 * SPDX-FileCopyrightText: Huawei Inc.
 *
 */

package org.eclipse.xpanse.modules.database.common;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import org.apache.commons.lang3.StringUtils;


/**
 * The kind of the Resources.
 */
public enum DeployResourceKind {
    Vm("vm"),
    Container("container"),
    PublicIp("public_ip"),
    Vpc("vpc");

    private final String kind;

    DeployResourceKind(String kind) {
        this.kind = kind;
    }

    /**
     * For XpanseResourceKind serialize.
     */
    @JsonCreator
    public DeployResourceKind getByValue(String kind) {
        for (DeployResourceKind resourceKind : values()) {
            if (resourceKind.kind.equals(StringUtils.lowerCase(kind))) {
                return resourceKind;
            }
        }
        return null;
    }

    /**
     * For XpanseResourceKind deserialize.
     */
    @JsonValue
    public String toValue() {
        return this.kind;
    }
}
