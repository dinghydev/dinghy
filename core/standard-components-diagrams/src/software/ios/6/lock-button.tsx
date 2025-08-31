import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCK_BUTTON = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.ios.iLockButton;fontColor=#cccccc;fontSize=13;mainText=;spacingLeft=50;spacingRight=10;align=center;sketch=0;whiteSpace=wrap;',
  },
  _width: 174,
  _height: 50,
}

export function LockButton(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOCK_BUTTON}
      {...props}
      _style={extendStyle(LOCK_BUTTON, props)}
    />
  )
}
