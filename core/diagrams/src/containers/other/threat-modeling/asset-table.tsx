import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ASSET_TABLE = {
  _style: {
    container:
      'shape=table;startSize=30;container=1;collapsible=0;childLayout=tableLayout;fillColor=#fff2cc;strokeColor=#d6b656;fontStyle=1;shadow=1;swimlaneFillColor=#FFFFFF;fontColor=#000000;whiteSpace=wrap;html=1;',
    entity: {
      strokeColor: '#d6b656',
      fillColor: '#fff2cc',
      fontColor: '#000000',
    },
  },
}

export function AssetTable(props: DiagramNodeProps) {
  return (
    <Shape
      {...ASSET_TABLE}
      {...props}
      _style={extendStyle(ASSET_TABLE, props)}
    />
  )
}
