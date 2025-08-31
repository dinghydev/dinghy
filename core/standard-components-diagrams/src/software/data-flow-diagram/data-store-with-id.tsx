import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_STORE_WITH_ID = {
  _style: {
    entity:
      'html=1;dashed=0;whiteSpace=wrap;shape=mxgraph.dfd.dataStoreID;align=left;spacingLeft=3;points=[[0,0],[0.5,0],[1,0],[0,0.5],[1,0.5],[0,1],[0.5,1],[1,1]];',
  },
  _width: 100,
  _height: 30,
}

export function DataStoreWithId(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_STORE_WITH_ID}
      {...props}
      _style={extendStyle(DATA_STORE_WITH_ID, props)}
    />
  )
}
