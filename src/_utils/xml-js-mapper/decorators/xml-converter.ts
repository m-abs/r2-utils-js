// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

import { getDefinition } from "../classes/object-definition";
import { IPropertyConverter } from "../converters/converter";
import { IParameterlessConstructor } from "../types";

export function XmlConverter(converter: IPropertyConverter | IParameterlessConstructor<IPropertyConverter>) {
    return (target: any, key: string): void => {
        const property = getDefinition(target.constructor).getProperty(key);

        if (typeof converter === "function") {
            property.converter = new converter();
        } else {
            property.converter = converter;
        }
    };
}
