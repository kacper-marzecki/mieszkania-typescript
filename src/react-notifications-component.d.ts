declare module "react-notifications-component" {
  import React from "react";

  export interface ReactNot {
    store: any;
  }
  export const store: any;
  declare const ReactNotification: React.ComponentType & ReactNot;
  export default ReactNotification;
}
