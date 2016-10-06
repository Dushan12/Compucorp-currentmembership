<?php /* Smarty version 2.6.27, created on 2016-10-05 13:57:08
         compiled from CRM/Contact/Form/Inline/ContactInfo.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('block', 'crmScope', 'CRM/Contact/Form/Inline/ContactInfo.tpl', 1, false),array('function', 'help', 'CRM/Contact/Form/Inline/ContactInfo.tpl', 35, false),array('modifier', 'crmAddClass', 'CRM/Contact/Form/Inline/ContactInfo.tpl', 37, false),)), $this); ?>
<?php $this->_tag_stack[] = array('crmScope', array('extensionKey' => "")); $_block_repeat=true;smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?><?php echo $this->_tpl_vars['form']['oplock_ts']['html']; ?>

<div class="crm-inline-edit-form">
  <div class="crm-inline-button">
    <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/formButtons.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
  </div>

  <div class="crm-clear">
    <?php if ($this->_tpl_vars['contactType'] == 'Individual'): ?>
    <div class="crm-summary-row">
      <div class="crm-label"><?php echo $this->_tpl_vars['form']['employer_id']['label']; ?>
&nbsp;<?php echo smarty_function_help(array('id' => "id-current-employer",'file' => "CRM/Contact/Form/Contact.hlp"), $this);?>
</div>
      <div class="crm-content">
        <?php echo ((is_array($_tmp=$this->_tpl_vars['form']['employer_id']['html'])) ? $this->_run_mod_handler('crmAddClass', true, $_tmp, 'big') : smarty_modifier_crmAddClass($_tmp, 'big')); ?>

      </div>
    </div>
    <div class="crm-summary-row">
      <div class="crm-label"><?php echo $this->_tpl_vars['form']['job_title']['label']; ?>
</div>
      <div class="crm-content"><?php echo $this->_tpl_vars['form']['job_title']['html']; ?>
</div>
    </div>
    <?php endif; ?>
    <div class="crm-summary-row">
      <div class="crm-label"><?php echo $this->_tpl_vars['form']['nick_name']['label']; ?>
</div>
      <div class="crm-content"><?php echo $this->_tpl_vars['form']['nick_name']['html']; ?>
</div>
    </div>
    <?php if ($this->_tpl_vars['contactType'] == 'Organization'): ?>
    <div class="crm-summary-row">
      <div class="crm-label"><?php echo $this->_tpl_vars['form']['legal_name']['label']; ?>
</div>
      <div class="crm-content"><?php echo $this->_tpl_vars['form']['legal_name']['html']; ?>
</div>
    </div>
    <div class="crm-summary-row">
      <div class="crm-label"><?php echo $this->_tpl_vars['form']['sic_code']['label']; ?>
</div>
      <div class="crm-content"><?php echo $this->_tpl_vars['form']['sic_code']['html']; ?>
</div>
    </div>
    <?php endif; ?>
    <div class="crm-summary-row">
      <div class="crm-label"><?php echo $this->_tpl_vars['form']['contact_source']['label']; ?>
</div>
      <div class="crm-content"><?php echo $this->_tpl_vars['form']['contact_source']['html']; ?>
</div>
    </div>
  </div> <!-- end of main -->
</div>
<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_crmScope($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>