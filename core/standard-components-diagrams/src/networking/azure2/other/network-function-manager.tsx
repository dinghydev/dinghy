import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETWORK_FUNCTION_MANAGER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Network_Function_Manager.svg;strokeColor=none;',
  _width: 60,
  _height: 68,
}

export function NetworkFunctionManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETWORK_FUNCTION_MANAGER}
      {...props}
      _style={extendStyle(NETWORK_FUNCTION_MANAGER, props)}
    />
  )
}
