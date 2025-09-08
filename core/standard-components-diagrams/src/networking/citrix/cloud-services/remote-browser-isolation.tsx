import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REMOTE_BROWSER_ISOLATION = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.remote_browser_isolation;',
  },
  _original_width: 50,
  _original_height: 35.949999999999996,
}

export function RemoteBrowserIsolation(props: DiagramNodeProps) {
  return (
    <Shape
      {...REMOTE_BROWSER_ISOLATION}
      {...props}
      _style={extendStyle(REMOTE_BROWSER_ISOLATION, props)}
    />
  )
}
