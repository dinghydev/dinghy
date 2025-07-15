import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIALOG_WITH_PERSISTENT_FOOTER_BUTTON = {
  _style: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;',
  _width: 280,
  _height: 472,
}

export function DialogWithPersistentFooterButton(props: DiagramNodeProps) {
  return <Shape {...DIALOG_WITH_PERSISTENT_FOOTER_BUTTON} {...props} />
}
