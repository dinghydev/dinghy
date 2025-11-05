import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOBILE_STEP_TEXT = {
  _style: {
    entity: 'dashed=0;shape=rect;fillColor=#BDBDBD;strokeColor=none;',
  },
  _width: 358,
  _height: 642,
}

export function MobileStepText(props: NodeProps) {
  return (
    <Shape
      {...MOBILE_STEP_TEXT}
      {...props}
      _style={extendStyle(MOBILE_STEP_TEXT, props)}
    />
  )
}
