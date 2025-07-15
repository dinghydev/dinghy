import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETWORK_FUNCTION_MANAGER_FUNCTIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Network_Function_Manager_Functions.svg;',
  _width: 68,
  _height: 62,
}

export function NetworkFunctionManagerFunctions(props: DiagramNodeProps) {
  return <Shape {...NETWORK_FUNCTION_MANAGER_FUNCTIONS} {...props} />
}
