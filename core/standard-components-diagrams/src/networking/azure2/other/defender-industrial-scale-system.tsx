import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEFENDER_INDUSTRIAL_SCALE_SYSTEM = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Industrial_Scale_System.svg;',
  _width: 68,
  _height: 68,
}

export function DefenderIndustrialScaleSystem(props: DiagramNodeProps) {
  return <Shape {...DEFENDER_INDUSTRIAL_SCALE_SYSTEM} {...props} />
}
