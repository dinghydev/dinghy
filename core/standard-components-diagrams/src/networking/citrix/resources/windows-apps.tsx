import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WINDOWS_APPS = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.windows_apps;',
  },
  _original_width: 50,
  _original_height: 42.285000000000004,
}

export function WindowsApps(props: DiagramNodeProps) {
  return (
    <Shape
      {...WINDOWS_APPS}
      {...props}
      _style={extendStyle(WINDOWS_APPS, props)}
    />
  )
}
