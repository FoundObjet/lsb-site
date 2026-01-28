/// <reference types="vite/client" />

import type { ComponentType } from "react";

declare module "catalog_remote/App" {
    const Component: ComponentType;
    export default Component;
}
