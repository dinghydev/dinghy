import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REMOTE_BROWSER_ISOLATION = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.remote_browser_isolation;',
  },
  _width: 50,
  _height: 35.949999999999996,
}

export function RemoteBrowserIsolation(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, REMOTE_BROWSER_ISOLATION)} />
  )
}
