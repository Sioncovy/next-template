module.exports = {
  types: [
    { value: 'feat', name: '✨ 特性：新增特性' },
    { value: 'fix', name: '🐛 修复：修复错误' },
    { value: 'docs', name: '🔖 文档：文档变更' },
    { value: 'style', name: '🎨 格式：代码格式' },
    { value: 'refactor', name: '🔨 重构：既不是特性，也不是修复的更改' },
    { value: 'perf', name: '⚡ 性能：提升性能' },
    { value: 'test', name: '✅ 测试：新增测试' },
    { value: 'chore', name: '🚀 工具：对构建过程或辅助工具的更改' },
    { value: 'revert', name: '⏪️ 回滚：代码回退' },
  ],

  messages: {
    type: '选择一种你的提交类型：',
    scope: '选择一个范围 (可选)：',
    customScope: '输入更改的范围 (可选)：',
    subject: '输入简短的变更描述：\n',
    body: '输入更长的变更描述，使用 "|" 换行(可选)：\n',
    breaking: '列出非兼容性说明 (可选):\n',
    footer: '列出此更改关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '你确定要继续以上提交吗？',
  },

  skipEmptyScopes: true,
  allowBreakingChanges: ['特性', '修复'],
  subjectLimit: 100,
};
