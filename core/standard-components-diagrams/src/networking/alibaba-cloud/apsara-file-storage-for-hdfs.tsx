import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APSARA_FILE_STORAGE_FOR_HDFS = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.apsara_file_storage_for_hdfs;',
  _width: 48,
  _height: 47.400000000000006,
}

export function ApsaraFileStorageForHdfs(props: DiagramNodeProps) {
  return (
    <Shape
      {...APSARA_FILE_STORAGE_FOR_HDFS}
      {...props}
      _style={extendStyle(APSARA_FILE_STORAGE_FOR_HDFS, props)}
    />
  )
}
