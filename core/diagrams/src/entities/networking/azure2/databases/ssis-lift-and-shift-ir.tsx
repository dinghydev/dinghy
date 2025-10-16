import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SSIS_LIFT_AND_SHIFT_IR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/SSIS_Lift_And_Shift_IR.svg;strokeColor=none;',
  },
  _original_width: 62,
  _original_height: 68,
}

export function SsisLiftAndShiftIr(props: DiagramNodeProps) {
  return (
    <Shape
      {...SSIS_LIFT_AND_SHIFT_IR}
      {...props}
      _style={extendStyle(SSIS_LIFT_AND_SHIFT_IR, props)}
    />
  )
}
