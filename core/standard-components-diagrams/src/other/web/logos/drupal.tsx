import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DRUPAL = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.drupal',
  },
  _width: 60.6,
  _height: 69,
}

export function Drupal(props: DiagramNodeProps) {
  return <Shape {...DRUPAL} {...props} _style={extendStyle(DRUPAL, props)} />
}
