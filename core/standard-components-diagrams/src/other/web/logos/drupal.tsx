import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DRUPAL = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.drupal',
  _width: 60.6,
  _height: 69,
}

export function Drupal(props: DiagramNodeProps) {
  return <Shape {...DRUPAL} {...props} />
}
