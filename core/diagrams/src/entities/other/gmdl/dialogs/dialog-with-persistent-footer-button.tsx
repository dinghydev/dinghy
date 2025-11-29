import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIALOG_WITH_PERSISTENT_FOOTER_BUTTON = {
  _style: {
    entity:
      'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;',
  },
  _width: 280,
  _height: 472,
}

export function DialogWithPersistentFooterButton(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, DIALOG_WITH_PERSISTENT_FOOTER_BUTTON)}
    />
  )
}
