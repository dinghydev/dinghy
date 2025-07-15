import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IMAGES_SERVICE = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;align=center;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=ellipse',
  _width: 100,
  _height: 100,
}

export function ImagesService(props: DiagramNodeProps) {
  return <Shape {...IMAGES_SERVICE} {...props} />
}
