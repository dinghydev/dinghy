import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WINDOWS_AND_LINUX_VIRTUALIZED_APPS = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.windows_and_linux_virtualized_apps;',
  },
  _original_width: 50,
  _original_height: 39.519999999999996,
}

export function WindowsAndLinuxVirtualizedApps(props: DiagramNodeProps) {
  return (
    <Shape
      {...WINDOWS_AND_LINUX_VIRTUALIZED_APPS}
      {...props}
      _style={extendStyle(WINDOWS_AND_LINUX_VIRTUALIZED_APPS, props)}
    />
  )
}
