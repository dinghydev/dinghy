import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHORTING_SELECTOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.shortingSelectorSwitch2;elSwitchState=1;',
  },
  _original_width: 60,
  _original_height: 66,
}

export function ShortingSelector(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHORTING_SELECTOR}
      {...props}
      _style={extendStyle(SHORTING_SELECTOR, props)}
    />
  )
}
