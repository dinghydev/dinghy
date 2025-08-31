import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HARD_DISK = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/hard_disk.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 27,
}

export function HardDisk(props: DiagramNodeProps) {
  return (
    <Shape {...HARD_DISK} {...props} _style={extendStyle(HARD_DISK, props)} />
  )
}
