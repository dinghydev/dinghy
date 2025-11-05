import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APP_SPACE_COMPOMENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/App_Space_Component.svg;strokeColor=none;',
  },
  _original_width: 56.68,
  _original_height: 68,
}

export function AppSpaceCompoment(props: NodeProps) {
  return (
    <Shape
      {...APP_SPACE_COMPOMENT}
      {...props}
      _style={extendStyle(APP_SPACE_COMPOMENT, props)}
    />
  )
}
