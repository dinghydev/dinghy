import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFENDER_INDUSTRIAL_SCALE_SYSTEM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Industrial_Scale_System.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function DefenderIndustrialScaleSystem(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFENDER_INDUSTRIAL_SCALE_SYSTEM}
      {...props}
      _style={extendStyle(DEFENDER_INDUSTRIAL_SCALE_SYSTEM, props)}
    />
  )
}
