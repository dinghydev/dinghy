import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SITE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.site;',
  },
  _width: 107,
  _height: 101,
}

export function Site(props: DiagramNodeProps) {
  return <Shape {...SITE} {...props} _style={extendStyle(SITE, props)} />
}
