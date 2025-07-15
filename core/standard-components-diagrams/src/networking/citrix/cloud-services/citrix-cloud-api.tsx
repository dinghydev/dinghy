import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CITRIX_CLOUD_API = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_cloud_api;',
  _width: 50,
  _height: 37.46,
}

export function CitrixCloudApi(props: DiagramNodeProps) {
  return <Shape {...CITRIX_CLOUD_API} {...props} />
}
