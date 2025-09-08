import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DRUPAL = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.drupal;gradientColor=#DFDEDE',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Drupal(props: DiagramNodeProps) {
  return <Shape {...DRUPAL} {...props} _style={extendStyle(DRUPAL, props)} />
}
