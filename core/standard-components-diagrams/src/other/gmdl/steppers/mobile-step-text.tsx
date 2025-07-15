import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MOBILE_STEP_TEXT = {
  _style: 'dashed=0;shape=rect;fillColor=#BDBDBD;strokeColor=none;',
  _width: 358,
  _height: 642,
}

export function MobileStepText(props: DiagramNodeProps) {
  return <Shape {...MOBILE_STEP_TEXT} {...props} />
}
