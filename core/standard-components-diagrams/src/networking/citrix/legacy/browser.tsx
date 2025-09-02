import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BROWSER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.browser;',
  },
  _original_width: 47.5,
  _original_height: 72.5,
}

export function Browser(props: DiagramNodeProps) {
  return <Shape {...BROWSER} {...props} _style={extendStyle(BROWSER, props)} />
}
