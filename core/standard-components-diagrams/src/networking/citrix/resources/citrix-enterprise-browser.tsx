import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CITRIX_ENTERPRISE_BROWSER = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_enterprise_browser;',
  _width: 50,
  _height: 42.955,
}

export function CitrixEnterpriseBrowser(props: DiagramNodeProps) {
  return <Shape {...CITRIX_ENTERPRISE_BROWSER} {...props} />
}
