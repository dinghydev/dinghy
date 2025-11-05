import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BROWSER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.browser;',
  },
  _width: 47.5,
  _height: 72.5,
}

export function Browser(props: NodeProps) {
  return <Shape {...BROWSER} {...props} _style={extendStyle(BROWSER, props)} />
}
