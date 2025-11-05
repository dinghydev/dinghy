import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FUNCTION_APPS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Functions.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 46,
}

export function FunctionApps(props: NodeProps) {
  return (
    <Shape
      {...FUNCTION_APPS}
      {...props}
      _style={extendStyle(FUNCTION_APPS, props)}
    />
  )
}
