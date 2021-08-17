// declare module "*.module.css" {
//     interface IClassNames {
//         [className: string]: string;
//     }
//     const classNames: IClassNames;
//     export = classNames;
// }

// declare module "*.module.scss" {
//     interface IClassNames {
//         [className: string]: string;
//     }
//     const classNames: IClassNames;
//     export = classNames;
// }

// declare module "*.module.less" {
//     interface IClassNames {
//         [className: string]: string;
//     }
//     const classNames: IClassNames;
//     export = classNames;
// }

declare module "*.module.css" {
    const IClassNames: {[key: string]: string};
    export = IClassNames;
}; 

declare module "*.module.scss" {
    const IClassNames: {[key: string]: string};
    export = IClassNames;
};

declare module "*.module.less" {
    const IClassNames: {[key: string]: string};
    export = IClassNames;
};