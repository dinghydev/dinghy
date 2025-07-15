import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FOLDER = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/folder.svg;',
  _width: 36.5,
  _height: 50,
}

export function Folder(props: DiagramNodeProps) {
  return <Shape {...FOLDER} {...props} />
}
