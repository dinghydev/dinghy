import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTION_DIALOG = {
  _style: {
    entity: 'shape=rect;fillColor=#a0a0a0;strokeColor=none;shadow=0;',
  },
  _original_width: 0,
  _original_height: 60,
}

export function ActionDialog(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTION_DIALOG}
      {...props}
      _style={extendStyle(ACTION_DIALOG, props)}
    />
  )
}
