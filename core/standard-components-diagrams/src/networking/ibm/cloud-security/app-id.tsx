import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APP_ID = {
  _style: {
    entity:
      'shape=rect;fillColor=#FA4D56;aspect=fixed;resizable=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeColor=none;fontSize=14;',
  },
  _original_width: 0,
  _original_height: 48,
}

export function AppId(props: DiagramNodeProps) {
  return <Shape {...APP_ID} {...props} _style={extendStyle(APP_ID, props)} />
}
