import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOGIC_APPS_CUSTOM_CONNECTOR = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Logic_Apps_Custom_Connector.svg;',
  _width: 50,
  _height: 50,
}

export function LogicAppsCustomConnector(props: DiagramNodeProps) {
  return <Shape {...LOGIC_APPS_CUSTOM_CONNECTOR} {...props} />
}
