import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FUNCTION_APPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Function_Apps.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60,
}

export function FunctionApps(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FUNCTION_APPS)} />
}
