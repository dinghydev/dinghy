import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOGIC_APPS_CUSTOM_CONNECTOR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Logic_Apps_Custom_Connector.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function LogicAppsCustomConnector(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOGIC_APPS_CUSTOM_CONNECTOR}
      {...props}
      _style={extendStyle(LOGIC_APPS_CUSTOM_CONNECTOR, props)}
    />
  )
}
