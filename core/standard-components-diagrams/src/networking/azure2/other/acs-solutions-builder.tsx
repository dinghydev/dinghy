import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACS_SOLUTIONS_BUILDER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/ACS_Solutions_Builder.svg;strokeColor=none;',
  _width: 68,
  _height: 52,
}

export function AcsSolutionsBuilder(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACS_SOLUTIONS_BUILDER}
      {...props}
      _style={extendStyle(ACS_SOLUTIONS_BUILDER, props)}
    />
  )
}
