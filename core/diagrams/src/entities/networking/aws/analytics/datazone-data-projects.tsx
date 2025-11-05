import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATAZONE_DATA_PROJECTS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.datazone_data_projects;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function DatazoneDataProjects(props: NodeProps) {
  return (
    <Shape
      {...DATAZONE_DATA_PROJECTS}
      {...props}
      _style={extendStyle(DATAZONE_DATA_PROJECTS, props)}
    />
  )
}
