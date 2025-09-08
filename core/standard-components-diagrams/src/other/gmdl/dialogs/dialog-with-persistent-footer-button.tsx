import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DIALOG_WITH_PERSISTENT_FOOTER_BUTTON = {
  _style: {
    entity:
      'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;',
  },
  _original_width: 280,
  _original_height: 472,
}

export function DialogWithPersistentFooterButton(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIALOG_WITH_PERSISTENT_FOOTER_BUTTON}
      {...props}
      _style={extendStyle(DIALOG_WITH_PERSISTENT_FOOTER_BUTTON, props)}
    />
  )
}
