import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SSIS_LIFT_AND_SHIFT_IR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/SSIS_Lift_And_Shift_IR.svg;',
  _width: 62,
  _height: 68,
}

export function SsisLiftAndShiftIr(props: DiagramNodeProps) {
  return <Shape {...SSIS_LIFT_AND_SHIFT_IR} {...props} />
}
