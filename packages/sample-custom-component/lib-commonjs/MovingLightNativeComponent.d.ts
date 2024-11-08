/// <reference types="react" />
/// <reference types="react-native/types/modules/codegen" />
import type { ColorValue, HostComponent, ViewProps } from 'react-native';
import type { DirectEventHandler, Float, Double, Int32, WithDefault } from 'react-native/Libraries/Types/CodegenTypes';
export type SomethingEvent = {
    value: string;
    target: Int32;
};
export interface MovingLightProps extends ViewProps {
    size?: WithDefault<Float, 42>;
    color?: ColorValue;
    eventParam?: string;
    objectProp?: {
        number: Double;
        string: string;
    };
    onSomething?: DirectEventHandler<SomethingEvent>;
}
type ComponentType = HostComponent<MovingLightProps>;
interface NativeCommands {
    setLightOn: (viewRef: React.ElementRef<ComponentType>, value: boolean) => void;
}
export declare const Commands: NativeCommands;
declare const _default: import("react-native/Libraries/Utilities/codegenNativeComponent").NativeComponentType<MovingLightProps>;
export default _default;
