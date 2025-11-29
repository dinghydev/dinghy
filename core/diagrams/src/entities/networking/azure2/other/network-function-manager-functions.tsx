import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETWORK_FUNCTION_MANAGER_FUNCTIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Network_Function_Manager_Functions.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62,
}

export function NetworkFunctionManagerFunctions(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, NETWORK_FUNCTION_MANAGER_FUNCTIONS)}
    />
  )
}
