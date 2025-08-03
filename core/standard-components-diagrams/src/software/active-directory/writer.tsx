import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WRITER = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/writer.svg;strokeColor=none;',
  _width: 48,
  _height: 50,
}

export function Writer(props: DiagramNodeProps) {
  return <Shape {...WRITER} {...props} />
}
